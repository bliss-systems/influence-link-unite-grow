
import { Shield, DollarSign, TrendingUp } from "lucide-react";
import { useTranslation } from "@/lib/i18n";

export const NoCommissionSection = () => {
  const { t } = useTranslation();
  return (
    <section className="py-16 bg-gradient-to-r from-green-50 to-emerald-50 border-y border-green-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-6">
            <Shield className="w-8 h-8 text-green-600" />
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            {t("noCommission.title")}
          </h2>

          <p className="text-xl text-slate-700 mb-8 max-w-2xl mx-auto">
            {t("noCommission.description")}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="flex flex-col items-center text-center p-6">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-3">
                <DollarSign className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="font-semibold text-slate-900 mb-2">{t("noCommission.access")}</h3>
              <p className="text-slate-600 text-sm">{t("noCommission.access_description")}</p>
            </div>

            <div className="flex flex-col items-center text-center p-6">
              <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-3">
                <TrendingUp className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="font-semibold text-slate-900 mb-2">{t("noCommission.insights")}</h3>
              <p className="text-slate-600 text-sm">{t("noCommission.insights_description")}</p>
            </div>

            <div className="flex flex-col items-center text-center p-6">
              <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mb-3">
                <Shield className="w-6 h-6 text-orange-600" />
              </div>
              <h3 className="font-semibold text-slate-900 mb-2">{t("noCommission.exposure")}</h3>
              <p className="text-slate-600 text-sm">{t("noCommission.exposure_description")}</p>
            </div>
          </div>

          <div className="mt-8 text-lg font-medium text-green-700">
            {t("noCommission.keep_earnings")}
          </div>
        </div>
      </div>
    </section>
  );
};
