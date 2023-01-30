import Style from '@/styles/layout/AppLayout.module.scss';

const AppLayout = (props: { children: React.ReactNode }) => {
  return (
    <div className={Style.AppLayout}>
      <div className={Style.AppLayout__width}> {props.children} </div>
    </div>
  );
};

export default AppLayout;
