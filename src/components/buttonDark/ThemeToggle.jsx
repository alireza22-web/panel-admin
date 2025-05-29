import { useEffect, useState } from 'react'

export default function ThemeToggle({ setDark }) {
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    const stored = localStorage.getItem('theme')
    if (stored === 'dark' || (!stored && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark')
      setIsDark(true)
      setDark?.(true)
    } else {
      setDark?.(false)
    }
  }, [setDark])

  const toggleTheme = () => {
    const newTheme = isDark ? 'light' : 'dark'
    document.documentElement.classList.toggle('dark', newTheme === 'dark')
    localStorage.setItem('theme', newTheme)
    setIsDark(!isDark)
    setDark?.(newTheme === 'dark')
  }

  // 🎯 اینجا keydown رو برای کل صفحه می‌گیریم
  useEffect(() => {
    const handleKeyDown = (e) => {
      console.log('press : ' + e.key)
      if (e.ctrlKey && e.key.toLowerCase() === 'k') {
        e.preventDefault()
        toggleTheme()
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => {
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [isDark]) 

  return (
    <button
      onClick={toggleTheme}
      className=" cursor-pointer rounded bg-gray-200 dark:bg-[#404040] text-black dark:text-white transition"
    >
      {isDark ? 
        <div className='flex gap-3 px-4 py-2 items-center relative flol'>
          <span className='font-mono text-sm lol max-[480px]:hidden bg-gray-800 dark:bg-gray-300 dark:text-gray-800 text-gray-200 px-2 py-1 rounded-md'>Ctrl + k</span>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className=" size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z" />
          </svg>  
        </div> 
       :
        <div className='flex gap-3 px-4 py-2 items-center relative flol'>
          <span className='font-mono text-sm lol max-[480px]:hidden bg-[#404040] dark:bg-gray-300 dark:text-gray-800 text-gray-200 px-2 py-1 rounded-md'>Ctrl + k</span>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className=" size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
          </svg>
        </div> 
        }
    </button>
  )
}
