import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import styles from './ExploreForm.module.css'

const ExploreForm = () => {
  return (
    <div className="flex w-full max-w-[673px] items-center space-x-4 ml-[216px] font-work">
      <Input type="text" className="h-[54px] text-[16px]" />
      <Button
        type="submit"
        size='lg'
        className={`${styles.buttonIcon} text-[18px] h-[54px] `}>
        Explore
      </Button>
    </div>
  );
}

export default ExploreForm;