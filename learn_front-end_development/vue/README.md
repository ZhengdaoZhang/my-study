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

## class 2: Reusability

### section 1: composable

- example 
- name prefix used 'use'
- use hooks, define computed, watch
- return ref computed

### section 2: custom directives

- introduction
- directive hooks: like component hooks
- function shorthand: app.directive("color",(el,binding)=>{}) | const vColor=(el,binding)=>{}
- object literal: binding.value.value  binding.value.arg binding.value.modifictor
- usage on components: it is not recommended

### section 3: plugins

- writing a plugin:  const p1={ install(app,config){ } }  app.use(p1,{a:1,b:2})
