//STYLES
import S from "./ProfileUser.module.scss";
//COMPONENTS
import { Select } from '../../../components';
  
export default function ProfileUser() {
  function onChange() {}
  return (
    <div className={S.container}>
      <div className={S.containerSelect}>
        <div className={S.containerSelectLeft}>
          <Select
            options={[1, 2, 3]}
            label="First Name"
            callback={onChange}
            selected="User Name"
          />
          <Select
            options={[1, 2, 3]}
            label="Last Name"
            callback={onChange}
            selected="User Name"
          />
          <Select
            options={[1, 2, 3]}
            label="Title"
            callback={onChange}
            selected="User Name"
          />
          <Select
            options={[1, 2, 3]}
            label="Title"
            callback={onChange}
            selected="User Name"
          />
        </div>
        <div className={S.containerSelectRight}>
          <Select
            options={[1, 2, 3]}
            label="Career"
            callback={onChange}
            selected="User Name"
          />
          <Select
            options={[1, 2, 3]}
            label="Hobby"
            callback={onChange}
            selected="User Name"
          />
          <Select
            options={[1, 2, 3]}
            label="Example"
            callback={onChange}
            selected="User Name"
          />
          <Select
            options={[1, 2, 3]}
            label="Example"
            callback={onChange}
            selected="User Name"
          />
        </div>
      </div>
      <div className={S.containerBtn}>
        <button>Save</button>
      </div>
    </div>
  );
}
