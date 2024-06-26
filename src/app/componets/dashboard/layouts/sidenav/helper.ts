
import{trigger,transition,style,animate} from "@angular/animations"

export interface INavbarData{
    routeLink:string;
    icon?:string;
    label:string;
    expanded?:boolean;
    items?:INavbarData[];
    role?: string;

}

export const fadeInOut =trigger('fadeInOut', [
    transition(':enter', [
      style({ opacity: 0 }),
      animate('350ms', style({ opacity: 1 }))
    ]),
    transition(':enter', [
      style({ opacity: 1 }),
      animate('350ms', style({ opacity: 0 }))
    ])
  ])