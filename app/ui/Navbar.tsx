import Logo from "@/public/logo.svg";
import Sun from "@/public/icon-sun.svg";
import Moon from "@/public/icon-moon.svg";
import useThemeStore from "@/stores/themeStore";

export function Navbar() {
  const { changeTheme, theme } = useThemeStore();

  return (
    <div className="text-primary bg-bg-primary w-full h-18 flex items-center justify-between px-4 rounded-2xl shadow-sm transition-all duration-300 ease-in-out">
      <Logo />
      <div
        className={`bg-icon-primary p-3 rounded-xl cursor-pointer hover:brightness-theme focus:outline-focus-primary transition-all duration-300 ease-in-out`}
        onClick={changeTheme}
      >
        {theme === "dark" ? <Sun /> : <Moon />}
      </div>
    </div>
  );
}
