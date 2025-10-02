import { Component } from '@angular/core';
import { HeaderSocialLinksItem } from './header-social-links-item/header-social-links-item';

@Component({
  selector: 'app-header-social-links',
  imports: [HeaderSocialLinksItem],
  templateUrl: './header-social-links.html',
  styleUrl: './header-social-links.css',
})
export class HeaderSocialLinks {}
