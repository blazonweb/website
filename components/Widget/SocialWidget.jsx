import { Icon } from '@iconify/react';
import Div from '../Div';
import Link from 'next/link';

export default function SocialWidget() {
  return (
    <Div className="cs-social_btns cs-style1">
      <Link href="https://www.facebook.com/blazonweb/" className="cs-center">
        <Icon icon="fa6-brands:facebook" />
      </Link>
      <Link href="https://www.instagram.com/blazonweb.in/" className="cs-center">
        <Icon icon="fa6-brands:instagram" />
      </Link>
      <Link href="/" className="cs-center">
        <Icon icon="fa6-brands:linkedin-in" />
      </Link>
      {/* <Link href="/" className="cs-center">
        <Icon icon="fa6-brands:slack" />
      </Link> */}
    </Div>
  );
}
