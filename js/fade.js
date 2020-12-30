import Highway from '@dogstudio/highway';
import gsap from 'gsap';
import { SplitText } from 'gsap/SplitText';
gsap.registerPlugin(SplitText);



// import A from './canvas/app.js';

// let sketch = new A();

// let split;
let animation = gsap.timeline({});

export default class Fade extends Highway.Transition {
  out({from, done}) {
    console.log('OUT', from);
    const tl = gsap.timeline({
      defaults: {
        duration: 0.3,
        ease: 'power1.inOut'
      },
      onComplete: done
    });
    tl.to(from, { opacity: 0 });
    return tl;
    
  }

  in({from, to, done}) {
    // let goto = to.getAttribute('data-router-view');
    // sketch.goto(goto);
    const split = new SplitText('h1', {type:'chars'});
	  // animation.from(split.chars, {opacity:0, y:50, ease:'back(4)', stagger:{
		// from:'end',
		// each:0.05
	  // }, delay: 0.4});
    from.remove();
    console.log('IN', from, to);
    const tl = gsap.timeline({
      defaults: {
        duration: 0.3,
        ease: 'power1.inOut'
      },
      onComplete: done
    })
    tl.fromTo(to, { opacity: 0 }, { opacity: 1 })
      // .fromTo('img', { opacity: 0 }, { opacity: 1 })
      .from(split.chars, {opacity:0, y:50, ease:'back(4)', stagger:{
        from:'end',
        each:0.05
        }, delay: 0.4});
    return tl;
  }
}