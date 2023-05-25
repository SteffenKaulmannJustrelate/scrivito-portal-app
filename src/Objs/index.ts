import * as Scrivito from 'scrivito'
const modules = import.meta.glob([
  './**/ObjClass.ts',
  './**/*Component.tsx',
  './**/*LayoutComponent.tsx',
])

for (const path in modules) {
  modules[path]()
}

if (Scrivito.isEditorLoggedIn()) {
  const editingConfigModules = import.meta.glob([
    './**/*EditingConfig.ts',
    './**/*EditingConfig.tsx',
  ])

  for (const path in editingConfigModules) {
    editingConfigModules[path]()
  }
}

export {}