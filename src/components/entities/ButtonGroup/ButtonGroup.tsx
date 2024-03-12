import { Button } from "@/components/ui/button";

const ButtonGroup = () => {
  return (
    <div className="flex gap-7 ml-auto">
      <Button
        variant={'ghost'}
        className="text-[13px] leading-6 tracking-[.03em]"
        onClick={() => console.log('Sing In')}>
        Sing In
      </Button>
      <Button
        variant={'outline'}
        size='m'
        className="shadow-[6px_6px_0_0_rgb(15,15,15)] text-[14px] leading-6 tracking-[.0225em]"
        onClick={() => console.log('Sing up Free')}>
        Sing up Free
      </Button>
    </div>
  )
}

export default ButtonGroup;