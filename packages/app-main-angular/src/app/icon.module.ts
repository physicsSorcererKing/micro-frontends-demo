import { NgModule } from '@angular/core';

import { TablerIconsModule } from 'angular-tabler-icons';
import { IconBrandAngular } from 'angular-tabler-icons/icons';

// Select some icons (use an object, not an array)
const icons = {
  IconBrandAngular,
};

@NgModule({
  imports: [TablerIconsModule.pick(icons)],
  exports: [TablerIconsModule],
})
export class IconsModule {}

// NOTES:
// 1. We add TablerIconsModule to the 'exports', since the <i-tabler> component will be used in templates of parent module
// 2. Don't forget to pick some icons using TablerIconsModule.pick({ ... })
