'use client' // برای Next.js با App Router ضروریه

import { useEffect, useState } from 'react'

export default function ThemeToggle({setDark}) {
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    // چک کردن حالت اولیه (مثلاً از localStorage یا سیستم)
    const stored = localStorage.getItem('theme')
    if (stored === 'dark' || (!stored && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark')
      setIsDark(true)
    }
  }, [])

  const toggleTheme = () => {
    const newTheme = isDark ? 'light' : 'dark'
    document.documentElement.classList.toggle('dark', newTheme === 'dark')
    localStorage.setItem('theme', newTheme)
    setIsDark(!isDark)
    setDark(document.documentElement.classList.contains("dark"));

    // setDark()
  }

  return (
    <button
      onClick={toggleTheme}
      className="px-4 py-2 cursor-pointer rounded bg-gray-200 dark:bg-gray-700 text-black dark:text-white transition"
    >
      {isDark ? 'حالت روشن' : 'حالت تاریک'}
    </button>
  )
}
