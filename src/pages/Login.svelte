<script lang="ts">
  import FormItem from '../components/common/form/FormItem.svelte';
  import { userInfo } from '../stores/user';

  function handleClick(e) {
    const { name, value } = e.target;
    userInfo.update(prev => {
      prev[name] = value;
      return prev;
    });
  }
</script>

<!-- 로그인 영역 -->
<div class="login">
  <h3>로그인</h3>
  <form action="" method="post">
    <fieldset>
      <legend>로그인 정보 입력</legend>
      <FormItem
        className="test"
        labelName="테스트"
        inputId="test"
        inputName="test"
        type="text" />
      <!-- 아이디 -->
      <div class="id">
        <label for="user-id">아이디</label>
        <input type="text" name="userid" id="user-id" on:input={handleClick} />
      </div>
      <!-- 패스워드 -->
      <div class="password">
        <label for="password">패스워드</label>
        <input type="password" name="password" id="password" />
      </div>
      <!-- 로그인 버튼 -->
      <div class="btn-login">
        <button type="submit">로그인</button>
      </div>
    </fieldset>
  </form>
</div>