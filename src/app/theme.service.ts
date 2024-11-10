import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private readonly themeKey = 'appTheme';

  setTheme(theme: string) {
    localStorage.setItem(this.themeKey, theme);
    this.applyTheme(theme);
  }

  getTheme(): string {
    return localStorage.getItem(this.themeKey) || 'light'; // default theme
  }

  applyTheme(theme: string) {
    const root = document.documentElement; // доступ до кореневого елемента
    if (theme === 'dark') {
      root.style.setProperty('--header-color', '#420002');
      root.style.setProperty('--page-color', '#111213');
      root.style.setProperty('--footer-color', '#AF9C8D');
      root.style.setProperty('--page-text-color', '#D9D9D9');
      root.style.setProperty('--footer-text-color', '#420002');
      root.style.setProperty('--brand-color', '#AF9C8D');
      root.style.setProperty('--card-color', '#39393A');
      root.style.setProperty('--manga-color', '#39393A');
    } else {
      root.style.setProperty('--header-color', '#111213');
      root.style.setProperty('--page-color', '#AF9C8D');
      root.style.setProperty('--footer-color', '#420002');
      root.style.setProperty('--page-text-color', '#420002');
      root.style.setProperty('--footer-text-color', '#AF9C8D');
      root.style.setProperty('--brand-color', '#111213');
      root.style.setProperty('--card-color', '#111213');
      root.style.setProperty('--manga-color', '#796C62');
    }
  }
}
