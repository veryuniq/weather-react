export default function ThemeChange() {
    function setThemePreference() {
      var d = new Date();

      var currentHour = d.getHours();

      if (currentHour >= 19 || currentHour <= 6) {
        return(
        document.body.setAttribute("data-theme", "dark_theme")
      );
    } else {
        return(
        document.body.setAttribute("data-theme", "light_theme")
      );
    }}

    window.onload = setThemePreference;
}