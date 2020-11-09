<script lang="ts">
  import FormItem from '../../components/form/FormItem.svelte';
  import Button from '../../components/button/Button.svelte';
  import { userInfo } from './store';
  import { login } from './service';

  let info;

  userInfo.subscribe((value) => {
    console.log('value', value);
    info = value;
  });

  function onInput(e) {
    const { name, value } = e.target;
    info[name] = value;
  }

  function onSubmit(e) {
    e.preventDefault();
    login(info);
  }
</script>

<form action="" method="post">
  <fieldset>
    <legend>로그인 정보 입력</legend>
    <!-- 아이디 -->
    <FormItem
      className="test"
      labelName="아이디"
      inputId="userid"
      inputName="userid"
      type="text"
      onInput={onInput} />
    <!-- 패스워드 -->
    <FormItem
      className="test"
      labelName="패스워드"
      inputId="password"
      inputName="password"
      type="password"
      onInput={onInput} />
    <!-- 로그인 버튼 -->
    <div class="btn-login">
      <Button
        buttonType="submit"
        onClick={onSubmit}
        text="로그인" />
    </div>
  </fieldset>
</form>