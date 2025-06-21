public class FinancialForecast {
    public static double forecast(double currentValue, double growthRate, int years) {
        if (years == 0) {
            return currentValue;
        }
        return forecast(currentValue * (1 + growthRate), growthRate, years - 1);
    }

    public static void main(String[] args) {
        double currentValue = 10000.0;
        double annualGrowthRate = 0.08;
        int forecastYears = 5;

        double predictedValue = forecast(currentValue, annualGrowthRate, forecastYears);
        System.out.printf("Predicted value after %d years: $%.2f\n", forecastYears, predictedValue);
    }
}
