import ExploreForm from '@/components/entities/ExploreForm/ExploreForm';
import styles from './Hero.module.css';

const Hero = () => {
  return (
    <div className={`container ${styles.heroBackground} relative pt-[54px] pb-[114px]`}>
      <h1 className='font-roboto text-[130px] leading-[156px] tracking-[-5.2px] mb-[54px]'>
        <span className='text-left block ml-[44px] mb-[-30px] '>Land a job</span>
        <span className='text-right block mr-[76px]'>the easy way</span>
      </h1>

      <p className='w-[640px] ml-[222px] font-work text-[24px] leading-[36px] mb-[60px]'>
        The best place to discover & apply to the coolest start up jobs, without the black box.
      </p>
      <ExploreForm />
      <img src='/hero-girl.svg' alt='Girl icon' width={99} height={99} className='absolute top-[374px] left-[64px]' />
      <img src='/hero-boy.svg' alt='Boy icon' width={90} height={90} className='absolute top-[148px] right-[170px]' />
      <img src='/hero-f.svg' alt='F icon' width={68} height={68} className='absolute bottom-[100px] left-[50px]' />
      <img src='/hero-w.svg' alt='W icon' width={72} height={72} className='absolute top-[21px] right-[206px]' />
    </div>
  )
}

export default Hero;