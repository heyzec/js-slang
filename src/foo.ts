import { Variant, Chapter } from './types'
import { createContext, type IOptions, runInContext } from '.'

const chapter = Chapter.SOURCE_1;
const context = createContext(chapter, Variant.NON_DET)
// console.log(context);
const options: Partial<IOptions> = {
    executionMethod: 'interpreter',
    useSubst: true
}
Promise.all([(async () => {
    const output = await runInContext(`
const x = 11;
const z = x+1;
                       `, context, options);
    // console.log({
    //     errors: context.errors,
    //     control: context.runtime.control,
    //     breakpointSteps: context.runtime.breakpointSteps,
    //     changepointSteps: context.runtime.changepointSteps,
    //
    // });
    console.log(output);
})()]);
