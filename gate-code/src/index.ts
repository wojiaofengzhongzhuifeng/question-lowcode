import CodeGen from '@alilc/lowcode-code-generator';

import examplePlugin from './plugins/example';

export default function createGateCodeProjectBuilder() {
  return CodeGen.createProjectBuilder({
    template: CodeGen.solutionParts.icejs.template,
    plugins: {
      components: [
        CodeGen.plugins.react.reactCommonDeps(),
        CodeGen.plugins.common.esmodule({ fileType: 'jsx' }),
        CodeGen.plugins.react.containerClass(),
        CodeGen.plugins.react.containerInjectContext(),
        CodeGen.plugins.react.containerInjectUtils(),
        CodeGen.plugins.react.containerInjectDataSourceEngine(),
        CodeGen.plugins.react.containerInjectI18n(),
        CodeGen.plugins.react.containerInitState(),
        CodeGen.plugins.react.containerLifeCycle(),
        CodeGen.plugins.react.containerMethod(),
        examplePlugin(),
        CodeGen.plugins.react.jsx({
          nodeTypeMapping: {
            Div: 'div',
            Component: 'div',
            Page: 'div',
            Block: 'div',
          },
        }),
        CodeGen.plugins.style.css(),
      ],
      pages: [
        CodeGen.plugins.react.reactCommonDeps(),
        CodeGen.plugins.common.esmodule({ fileType: 'jsx' }),
        CodeGen.plugins.react.containerClass(),
        CodeGen.plugins.react.containerInjectContext(),
        CodeGen.plugins.react.containerInjectUtils(),
        CodeGen.plugins.react.containerInjectDataSourceEngine(),
        CodeGen.plugins.react.containerInjectI18n(),
        CodeGen.plugins.react.containerInitState(),
        CodeGen.plugins.react.containerLifeCycle(),
        CodeGen.plugins.react.containerMethod(),
        examplePlugin(),
        CodeGen.plugins.react.jsx({
          nodeTypeMapping: {
            Div: 'div',
            Component: 'div',
            Page: 'div',
            Block: 'div',
          },
        }),
        CodeGen.plugins.style.css(),
      ],
      router: [
        CodeGen.plugins.common.esmodule(),
        CodeGen.solutionParts.icejs.plugins.router(),
      ],
      entry: [CodeGen.solutionParts.icejs.plugins.entry()],
      constants: [CodeGen.plugins.project.constants()],
      utils: [
        CodeGen.plugins.common.esmodule(),
        CodeGen.plugins.project.utils('react'),
      ],
      i18n: [CodeGen.plugins.project.i18n()],
      globalStyle: [CodeGen.solutionParts.icejs.plugins.globalStyle()],
      htmlEntry: [CodeGen.solutionParts.icejs.plugins.entryHtml()],
      packageJSON: [CodeGen.solutionParts.icejs.plugins.packageJSON()],
    },
    postProcessors: [CodeGen.postprocessor.prettier()],
  });
}
