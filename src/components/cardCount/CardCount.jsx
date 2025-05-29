import CountUp from 'react-countup';

export const CardCount = ({end=100,duration=2,delay=0,title="شمارنده"})=>{
  return (
    <div className='rounded-md shadow-lg px-4 py-2 text-lg max-lg:text-base max-lg:flex max-lg:gap-2 max-lg:py-4 max-lg:items-center max-lg:justify-center w-full bg-gradient-to-b from-gray-100 to-gray-200 dark:from-[#202020] dark:to-[#101010] dark:shadow-[0_4px_24px_rgba(0,0,0,0.6)]  dark:bg-gray-800'>
      <h2 className='text-gray-600 dark:text-gray-300'>{title}:</h2>
      <CountUp className='text-xl font-semibold text-gray-800 dark:text-gray-100 ' end={end} delay={delay} duration={duration} />
    </div>
  );
}