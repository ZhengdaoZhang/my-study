# VUE

Vue (pronounced /vjuː/, like view) is a JavaScript framework for building user interfaces. It builds on top of standard HTML, CSS, and JavaScript and provides a declarative, component-based programming model that helps you efficiently develop user interfaces of any complexity.

## class 1: Essentials

### section 1: Create an application

- the application instance: const app=createApp(componentA)
- the Root Component const: componentA={template:``}
- mounting the app: app.mount("#app")
- App Configurations
- multiple application instances

### section 2: Template syntax

- text interpolation  {{ a }}
- raw html: v-html
- attribute bindings: v-bind:value="" | :value=""
- using javascript expressions: :value="1+1" | :value="a?'1':'2'" | :value="a()"
- directives： v-on:click.stop="onClick"

### section 3: Reactivity fundamentals

- ref(): const a=ref(1) | a.value=2
- setup  
- why refs
- deep reactivity
- dom update timing
- reactive()

### section 4: computed properties

- basic example: const a=computed(()=> b+1)
- computed caching vs methods
- writable Computed

### section 5: class and style bindings

- binding HTML classes: :class="'a b c'" | :class="['a','b','c']" | :class={a:true,b:true,c:true}
- bind inline Styles: :style="'color:red;'" | :style={color:'red'}

### section 6: conditional rendering

- v-if
- v-else
- v-else-if
- v-if on template
- v-show
- v-if vs v-show
- v-if with v-for : 1.v-if 2.v-for

### section 7: list rendering

- v-for
- v-for and object: v-for="(value,key) in object"
- v-for with a range: v-for="i of 3"
- v-for with v-if
- maintaining state with key v-for="(value,key) in object" :key="value.id"
- v-for with a component
- array change detection: push() pop() shift() unshift() splice() sort() reverse()
- displaying filtered/sorted Results

### section 8: event handing

- listening to events
- inline handlers: @click="a+1"
- method handlers: @click="changeA"
- calling methods in inline handlers: @click="changeA()"
- accessing event argument in inline handlers:  @click="changeA(a,$event)"
- event modifiers： @click.stop="changeA" | @click.capture="changeA" | @click.once="changeA" | @click.prevent="changeA"
- key modifiers: @keydown.ctrl
- mouse button modifiers: left middle right

### section 9: form input bindings

- basic usage： text, multiline text, checkbox, radio, select: v-model=""
- value bindings: checkbox radio select option:  v-for + :value=""
- modifiers: .lazy .number .trim

### section 10: lifecycle hooks

- registering lifecycle hooks: setup beforeCreate created beforeMount mounted beforeUpdate updated beforeUnmount unmounted
- lifecycle diagram

### section 11: watch

- basic example: watch(a,(newVal,oldVal)=>{})
- deep watchers: watch(()=>a.value.b,(newVal,oldVal)=>{},{deep:true})
- eager watchers: watch(()=>a.value.b,(newVal,oldVal)=>{},{deep:true,immediate:true})
- onece watchers: watch(()=>a.value.b,(newVal,oldVal)=>{},{deep:true,immediate:true,once:true})
- watcheffect(): watcheffect(()=>{})
- callback flush timing: watcheffect(()=>{}, {flush: 'post'})
- stopping a watcher: const a=watch(a,(newVal,oldVal)=>{}); a();

### section 12: template refs

- Accessing the refs:  ref="input" |  const input=ref(null)
- refs inside v-for:  v-for="..."  ref="itemRefs" | const itemRefs = ref([])
- function ref: :ref="(el)=>{}"
- component ref: component instance

### section 13: components basic

- defining a component: const component={template:``} | SFC
- using a component: import ComponentA form './a.vue' |  componets:{ComponentA} |  app.components("ComponentA",ComponentA)
- passing props: const props = defineProps({ val:{type:String,default:"1"} }) | props:{...}  setup(props){}
- listening to events: const emit = defineEmits(["emit1"]) | emit("emit1",1) |  @emit1="fn1"
- content distribution with slots
- dynamic components:  component element + :is="componentName|componetObj"

## class 2: Components in-depth

### section 1: registration

- global registration: app.component("",OBJ)
- local registration: import xxx form 'aaa.vue' | components:{}
- component name casing: ComponentA

### section 2: props

- props declaration:  const props = defineProps({ val:{type:String,default:"1"} }) | props:{...}  setup(props){}
- prop passing details
- one-way data flow
- prop validation:  { type:String, validator(value,props){ return ['success', 'warning', 'danger'].includes(value) } }
- boolean casting: disable:{type:Boolean}   disable or none

### section 3: events

- emitting and listening to events: const emit = defineEmits(["onClick"]) | @on-click="" | emit("onClick",1)
- event arguments: @on-click="a++" | @on-click="aChange" | @on-click="aChange()"
- declaring emitted events
- event validation:  defineEmits({ emit1:()=> true , emit2:(parms)=>{ .... } })

### section 4: component v-model

- basic usage: defineProps(["modelVal"]) | defineEmit(["update:modelVal"]) | emit("update:modelVal",1)
- v-model arguments: v-model:model-val=""
- multiple v-model bindings: defineProps(["modelVal" , "modelVal2"]) | defineEmit(["update:modelVal", "update:modelVal2"]) |  v-model:model-val="" v-model:model-val2=""
- handing v-model modifiers

### section 5: fallthrough attributes

- attributes inheritance: class style @click
- disabling attributes inheritance: defineOptions({ inheritAttrs:false }) | { inheritAttr:false ,setup() {return {} } }
- attribute inheritance on multiple root nodes: v-bind="$attrs"
- accessing fallthough attributes in javascript: const attrs = useAttrs(); | setup(props,ctx) { const attrs = ctx.attrs; return {} }

### section 6: slot

- slot content and outlet:  slot element  and v-slot:slot-name or #slot-name  
- rander scope
- fallback content: slot tag inner
- named slots: slot element name=""
- conditional slots: v-if="$slots.header"
- dynamic slot names: v-slot:[xxx] | #[xxx]
- scoped slots:  slot element  :val="" :count="2"  | v-slot="scope"  {{ scope.val }} {{ scope.count }}

### section 7: provide / inject

- props driling
- provide: provide("key",value)
- app-level provide:  app.provide("key",value)
- inject: const val = inject("key","default value")
- working with reactivity: const a=ref(1) app.provide("key",a)
- working with symbol keys

## class 3: Reusability

### section 1: composable

- example
- name prefix used 'use'
- use hooks, define computed, watch
- return ref computed

### section 2: custom directives

- introduction
- directive hooks: like component hooks
- function shorthand: app.directive("color",(el,binding)=>{}) | const vColor=(el,binding)=>{}
- object literal: binding.value.value | binding.value.arg | binding.value.modifictor
- usage on components: it is not recommended

### section 3: plugins

- writing a plugin:  const p1={ install(app,config){ } }  app.use(p1,{a:1,b:2})

## class 4: Built-in components

### section 1: transition

- The transition component: Transition | v-if
- transition class: .v-enter-from, .v-enter-active, .v-enter-to, .v-leave-from, .v-leave-active, .v-leave-to
- named transitions:  Transition  name=""
- css animation: @keyframes xxx {}  v-enter-active  v-leave-active
- transition between elements: v-if v-else-if v-else
- :is :key: change :is or :key will cause transition

### section 2: transitiongroup

- TransitionGroup component
- tag: tag="ul"
- key: v-for="item of list" :key="item"

### section 3: keepAlive

- KeepAlive: KeepAlive component :is
- include: :include="['ComponentA' , 'ComponentB']"
- max cached instances :max="10"
- lifecycle of cached instance: onActivated, onDeactivated

### section 4: teleport

- Basic usage: Teleport to="body"
- using width component: no differentiation
- disabling teleport v-if="false"
- Multiple Teleports on the Same Target: sequence added

## class 5: scaling up

### section 1: single-file components

### section 2: tooling

- [vue sfc playground](https://play.vuejs.org/#eNp9kUFLwzAUx7/KM5cqzBXR0+gGKgP1oKKCl1xG99ZlpklIXuag9Lv7krK5w9it7//7v/SXthP3zo23EcVEVKH2yhEEpOhm0qjWWU/QgccV9LDytoWCq4U00tTWBII2NDBN/LJ4Qq0tfFuvlxfFlTRVORzHB/FA2Dq9IOQJoFrfzLouL/d9VfKUU2VcJNhet3aJeioFcymgZFiVR/tiJCjw61eqGW+CNWzepX0pats6pdG/OVKsJ8UEMklswXa/LzkjH3G0z+s11j8n8k3YpUyKd48B/RalODBa+AZpwPPPV9zx8wGyfdTcPgM/MFgdk+NQe4hmydpHvWz7nL+/Ms1XmO8ITdhfKommZp/7UvA/eTxz9X/d2/Fd3pOmF/0fEx+nNQ==)
- [stackblitz](https://stackblitz.com/)
- [vite](https://vitejs.dev/)
- [Vue CLI](https://cli.vuejs.org/)
- IDE support (VS Code & Vue - official extension)
- [Browser Devtools](https://vuejs.org/guide/scaling-up/tooling.html#browser-devtools)
- Testing [Vitest](https://vitest.dev/)
- eslint-plugin-vue
  
### section 3: router

- hashchange  and  conponent :is=""
- vuw-router

### section 4: state management

- pinia

### section 5: testing

- unit
- component
- end-to-end

### section 6: server-side randering

## class 6: best practices

### section 1: production deployment

### section 2: performance

### section 3: accessbility

### section 4: security

## class 7: typescript

### section 1: overview

### section 2: ts with composition API

### section 3: ts with options API

## class 7: extra topics

### section 1: ways of using Vue

### section 2: composition API FAQ

### section 3: reactive in depth

### section 4: rendering mechanism

### section 5: render function & JSX

### section 6: Vue and web components

### section 7: animation techniques