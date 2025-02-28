import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
} from "@/components/ui/drawer";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export interface FeatureInfo {
  title: string;
  description: string;
  value?: string;
  imageUrl?: string;
}

interface FeatureDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  feature: FeatureInfo;
}

export const FeatureDrawer = ({ isOpen, onClose, feature }: FeatureDrawerProps) => {
  return (
    <Drawer open={isOpen} onOpenChange={onClose}>
      <DrawerContent>
        <div className="mx-auto w-full max-w-2xl">
          <DrawerHeader>
            <DrawerTitle className="text-2xl">{feature.title}</DrawerTitle>
            {feature.value && (
              <div className="text-lg text-muted-foreground mt-2">
                Value: {feature.value}
              </div>
            )}
          </DrawerHeader>
          <div className="p-6">
            {feature.imageUrl && (
              <div className="relative w-full h-48 mb-6">
                <Image
                  src={feature.imageUrl}
                  alt={feature.title}
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
            )}
            <DrawerDescription className="text-lg leading-relaxed">
              {feature.description}
            </DrawerDescription>
          </div>
          <DrawerFooter>
            <DrawerClose asChild>
              <Button variant="outline">Close</Button>
            </DrawerClose>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  );
}; 