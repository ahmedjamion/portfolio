import { bootstrapGithub, bootstrapLinkedin } from '@ng-icons/bootstrap-icons';
import {
  lucideArrowDown,
  lucideAtSign,
  lucideComputer,
  lucideCopy,
  lucideMapPin,
  lucideMenu,
  lucideMessageCircleMore,
  lucideMonitorSmartphone,
  lucideMoon,
  lucidePhoneCall,
  lucideSun,
  lucideTabletSmartphone,
} from '@ng-icons/lucide';
import {
  diAngularOriginal,
  diCplusplusOriginal,
  diCss3Original,
  diDartOriginal,
  diFlutterOriginal,
  diHtml5Original,
  diJavaOriginal,
  diJavascriptOriginal,
  diJetpackcomposeOriginal,
  diKotlinOriginal,
  diLaravelOriginal,
  diMysqlOriginal,
  diPhpOriginal,
  diTailwindcssOriginal,
  diTypescriptOriginal,
} from '@ng-icons/devicon/original';

export const ICONS = {
  github: bootstrapGithub,
  linkedIn: bootstrapLinkedin,

  phone: lucideTabletSmartphone,
  laptop: lucideMonitorSmartphone,

  email: lucideAtSign,
  call: lucidePhoneCall,
  message: lucideMessageCircleMore,
  pin: lucideMapPin,
  copy: lucideCopy,
  menu: lucideMenu,

  cpp: diCplusplusOriginal,
  java: diJavaOriginal,
  php: diPhpOriginal,
  sql: diMysqlOriginal,
  html: diHtml5Original,
  css: diCss3Original,
  js: diJavascriptOriginal,
  dart: diDartOriginal,
  ts: diTypescriptOriginal,
  kotlin: diKotlinOriginal,

  flutter: diFlutterOriginal,
  angular: diAngularOriginal,
  laravel: diLaravelOriginal,
  compose: diJetpackcomposeOriginal,
  tailwind: diTailwindcssOriginal,

  arrowDown: lucideArrowDown,

  moon: lucideMoon,
  sun: lucideSun,
  computer: lucideComputer,
};
