module.exports = async (pluginConfig, { lastRelease: { version }, logger }) => {
  const setOnlyOnRelease = pluginConfig.setOnlyOnRelease === undefined ? true : !!pluginConfig.setOnlyOnRelease

  if (!setOnlyOnRelease) {
    const varName = pluginConfig.varName || 'nextRelease'
    const isOutput = pluginConfig.isOutput|| false
    logger.log(`Setting current version ${version} to the env var ${varName}`)

    console.log(`##vso[task.setvariable variable=${varName};isOutput=${isOutput}]${version}`)
  }
}
