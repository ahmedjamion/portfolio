import { Component } from '@angular/core';
import { Section } from '../../shared/components/section/section';
import { SectionTitle } from '../../shared/components/section-title/section-title';
import { ContactItem } from './contact-item/contact-item';
import { ContactSocialLink } from './contact-social-link/contact-social-link';

@Component({
  selector: 'app-contact',
  imports: [Section, SectionTitle, ContactItem, ContactSocialLink],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact {}
