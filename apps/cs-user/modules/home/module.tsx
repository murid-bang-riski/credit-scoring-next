import Link from 'next/link';
import { Button } from '../../components/Button';

export const HomeModule = () => {
  return (
    <>
      <div>HomeModule</div>
      <Link href="/">
        <Button disabled={false}>Test</Button>
      </Link>
    </>
  );
};
