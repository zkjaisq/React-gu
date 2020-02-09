let importAll = (requireContext) => requireContext.keys().forEach(requireContext)
try {
  importAll(require.context('../icons/', true, /\.svg$/))
} catch (error) {

}

//将所有的svg图标进行导入  然后导出。
