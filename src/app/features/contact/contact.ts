import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SectionTitle } from '../../shared/components/section-title/section-title';
import { ContactItem } from './contact-item/contact-item';
import { ContactSocialLink } from './contact-social-link/contact-social-link';
import { NgxFadeComponent } from '@omnedia/ngx-fade';

@Component({
  selector: 'app-contact',
  imports: [SectionTitle, ContactItem, ContactSocialLink, NgxFadeComponent],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Contact {}
