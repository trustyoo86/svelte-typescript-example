<script lang="ts">
  export let className;
  export let labelName;
  export let inputId;
  export let inputName;
  export let type;
</script>

<div class="{className}">
  <label for="{inputId}">{labelName}</label>
  <input type="{type}" name="{inputName}" id="{inputId}" />
</div>