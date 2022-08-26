import { useState } from 'react';
import { objFD } from 'src/utils/formDataToObj';
import { mergeObj } from 'src/utils/mergeObj';

interface IUserForm {
  name: string,
  email: string,
  bio: {
    gender: string,
    age: string
  }
}
export default function UserForm () {
  const [user, setUser] = useState<IUserForm>();

  function handleSubmit (e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    let formObj = {};

    formData.forEach((value, key) => {
      const item = objFD(key, value);
      if (Object.keys(formObj).includes(Object.keys(item)[0])) {
        formObj[Object.keys(item)[0]] = {
          ...formObj[Object.keys(item)[0]],
          ...item[Object.keys(item)[0]]
        };
      } else {
        formObj = {
          ...formObj,
          ...item
        };
      }
    });

    setUser(formObj as IUserForm);
  }

  return <form onSubmit={handleSubmit} name={'user'}>
    <input name={'name'} defaultValue={user?.name}/>
    <input name={'email'} defaultValue={user?.email}/>
    <input name={'bio.gender'} defaultValue={user?.bio?.gender}/>
    <input name={'bio.age'} defaultValue={user?.bio?.age}/>
    <button type={'submit'}>sm</button>
  </form>;
}
