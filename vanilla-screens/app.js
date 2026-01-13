const tasksSeed = [
  {
    id: 1,
    title: 'Lorem Ipsum is simply dummy text of the printing...',
    createdOn: '2024-01-01',
    completed: false,
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
  },
  {
    id: 2,
    title: 'It is a long established fact that a reader will be distracted...',
    createdOn: '2024-01-02',
    completed: true,
    description: 'Long passages can distract from layout reviews—keep entries concise for clarity.',
  },
  {
    id: 3,
    title: 'There are many variations of passages of Lorem Ipsum available',
    createdOn: '2024-01-05',
    completed: true,
    description: 'Variations of the text are useful to visualize multi-line wrapping.',
  },
  {
    id: 4,
    title: 'Many desktop publishing packages and web page editors use Lorem Ipsum',
    createdOn: '2024-01-06',
    completed: false,
    description: 'Desktop publishing examples frequently pair lists with date metadata.',
  },
  {
    id: 5,
    title: 'Contrary to popular belief',
    createdOn: '2024-01-11',
    completed: false,
    description: 'A shorter entry keeps the layout balanced for mobile.',
  },
  {
    id: 6,
    title: 'All the Lorem Ipsum generators on the Internet',
    createdOn: '2024-01-14',
    completed: false,
    description: 'Multiple list items help verify scroll behavior.',
  },
  {
    id: 7,
    title: 'It uses a dictionary of over',
    createdOn: '2024-01-22',
    completed: false,
    description: 'Task descriptions surface in the slide-out panel.',
  },
  {
    id: 8,
    title: 'The generated Lorem Ipsum is therefore',
    createdOn: '2024-02-05',
    completed: false,
    description: 'A February date shows filtering across months.',
  },
  {
    id: 9,
    title: 'The standard chunk of Lorem ipsum used',
    createdOn: '2024-02-15',
    completed: false,
    description: 'Entries display checkbox, label, and creation date.',
  },
];

let tasks = [...tasksSeed];
let filters = { startDate: '', endDate: '' };
let selectedTask = null;
let drawerOpen = false;
let filterPanelOpen = false;

const rowsContainer = document.getElementById('taskRows');
const drawer = document.getElementById('drawer');
const descriptionField = document.getElementById('descriptionField');
const scrim = document.getElementById('scrim');
const filterPanel = document.getElementById('filterPanel');

const startInputs = document.querySelectorAll('[data-start-date]');
const endInputs = document.querySelectorAll('[data-end-date]');
const applyButtons = document.querySelectorAll('[data-apply]');
const resetButtons = document.querySelectorAll('[data-reset]');
const closeDrawerButton = document.querySelector('[data-close-drawer]');
const openFilterButton = document.querySelector('[data-open-filter]');
const closeFilterButton = document.querySelector('[data-close-filter]');

function formatDate(iso) {
  return new Date(iso).toLocaleDateString(undefined, {
    month: '2-digit',
    day: '2-digit',
    year: 'numeric',
  });
}

function syncInputs() {
  startInputs.forEach((input) => (input.value = filters.startDate));
  endInputs.forEach((input) => (input.value = filters.endDate));
}

function updateScrim() {
  const visible = drawerOpen || filterPanelOpen;
  scrim.classList.toggle('visible', visible);
}

function updateDrawer() {
  drawer.classList.toggle('open', drawerOpen && !!selectedTask);
  if (drawerOpen && selectedTask) {
    descriptionField.value = selectedTask.description;
  } else {
    descriptionField.value = '';
  }
  updateScrim();
}

function refreshSelection() {
  if (selectedTask) {
    selectedTask = tasks.find((task) => task.id === selectedTask.id) || null;
  }
  if (!selectedTask) {
    drawerOpen = false;
  }
  updateDrawer();
}

function filteredTasks() {
  const { startDate, endDate } = filters;
  return tasks.filter((task) => {
    const created = new Date(task.createdOn).getTime();
    const afterStart = startDate ? created >= new Date(startDate).getTime() : true;
    const beforeEnd = endDate ? created <= new Date(endDate).getTime() : true;
    return afterStart && beforeEnd;
  });
}

function renderTasks() {
  rowsContainer.innerHTML = '';
  filteredTasks().forEach((task) => {
    const row = document.createElement('div');
    row.className = 'row';
    row.setAttribute('role', 'listitem');
    row.addEventListener('click', () => openDetails(task.id));

    const name = document.createElement('label');
    name.className = 'name';

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.checked = !!task.completed;
    checkbox.addEventListener('click', (event) => event.stopPropagation());
    checkbox.addEventListener('change', (event) => {
      event.stopPropagation();
      toggleComplete(task.id);
    });

    const title = document.createElement('span');
    title.textContent = task.title;
    if (task.completed) {
      title.classList.add('completed');
    }

    name.append(checkbox, title);

    const date = document.createElement('div');
    date.className = 'date';
    date.textContent = formatDate(task.createdOn);

    const deleteBtn = document.createElement('button');
    deleteBtn.className = 'trash';
    deleteBtn.type = 'button';
    deleteBtn.setAttribute('aria-label', 'Delete task');
    deleteBtn.textContent = '🗑';
    deleteBtn.addEventListener('click', (event) => {
      event.stopPropagation();
      deleteTask(task.id);
    });

    row.append(name, date, deleteBtn);
    rowsContainer.appendChild(row);
  });
}

function setFilters(partial) {
  filters = { ...filters, ...partial };
  syncInputs();
  renderTasks();
}

function applyFilters() {
  renderTasks();
  if (filterPanelOpen) closeFilterPanel();
}

function resetFilters() {
  filters = { startDate: '', endDate: '' };
  syncInputs();
  renderTasks();
}

function toggleComplete(taskId) {
  tasks = tasks.map((task) =>
    task.id === taskId ? { ...task, completed: !task.completed } : task,
  );
  refreshSelection();
  renderTasks();
}

function openDetails(taskId) {
  selectedTask = tasks.find((task) => task.id === taskId) || null;
  drawerOpen = !!selectedTask;
  updateDrawer();
}

function closeDrawer() {
  drawerOpen = false;
  updateDrawer();
}

function deleteTask(taskId) {
  tasks = tasks.filter((task) => task.id !== taskId);
  refreshSelection();
  renderTasks();
}

function openFilterPanel() {
  filterPanelOpen = true;
  filterPanel.classList.add('panel-open');
  updateScrim();
}

function closeFilterPanel() {
  filterPanelOpen = false;
  filterPanel.classList.remove('panel-open');
  updateScrim();
}

function bindInputs() {
  startInputs.forEach((input) =>
    input.addEventListener('input', (event) => setFilters({ startDate: event.target.value })),
  );
  endInputs.forEach((input) =>
    input.addEventListener('input', (event) => setFilters({ endDate: event.target.value })),
  );

  applyButtons.forEach((button) => button.addEventListener('click', applyFilters));
  resetButtons.forEach((button) => button.addEventListener('click', resetFilters));

  if (closeDrawerButton) {
    closeDrawerButton.addEventListener('click', closeDrawer);
  }

  if (openFilterButton) {
    openFilterButton.addEventListener('click', openFilterPanel);
  }

  if (closeFilterButton) {
    closeFilterButton.addEventListener('click', closeFilterPanel);
  }

  scrim.addEventListener('click', () => {
    closeDrawer();
    closeFilterPanel();
  });
}

syncInputs();
bindInputs();
renderTasks();
