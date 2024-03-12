import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";

const Navigation = () => {
  return (
    <NavigationMenu className="max-w-[722px] justify-end text-[15px] leading-6">
      <NavigationMenuList className="flex gap-[50px] ">
        <NavigationMenuItem >
          <NavigationMenuLink href="#" className="hover:bg-accent hover:text-accent-foreground py-3 px-4 rounded-md">
            Find Job
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem >
          <NavigationMenuLink href="#" className="hover:bg-accent hover:text-accent-foreground py-3 px-4 rounded-md">
            For Companies
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

export default Navigation;