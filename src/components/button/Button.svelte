<script lang="ts">
  // dependencies
  import { createMachine, assign } from 'xstate';
  import { useMachine } from '../../utils/useMachine';

  // props
  export let buttonType = 'text';
  export let text = '';
  export let onClick;

  // machine
  const toggleMachine = createMachine({
    id: 'toggle',
    initial: 'inactive',
    context: {},
    states: {
      inactive: {
        on: { TOGGLE: 'active' }
      },
      active: {
        on: { TOGGLE: 'inactive' }
      },
    },
  });

  const { state, send } = useMachine(toggleMachine, {});

  $: active = $state.matches('active');

  export let clickHandler = (e) => {
    send('TOGGLE');
    onClick(e);
  };

</script>

<button
  type={buttonType}
  on:click={clickHandler}
  class={active ? 'active' : 'inactive'}
  >
  {text}
</button>

<style>

</style>
