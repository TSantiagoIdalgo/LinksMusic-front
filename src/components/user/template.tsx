import Style from './template.module.css';
import { IChildren } from '../../utils/types/props/children';

export default function Template({ children }: IChildren) {
  return (
    <section className={Style.template}>
      <div className={Style.login_template}>
        { children }
      </div>
    </section>
  );
}