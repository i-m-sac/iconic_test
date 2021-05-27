const input = [
  { name: 'links[ios][url]', value: 'ios://www.example.com' },
  { name: 'links[ios][bundle_id]', value: 'foo' },
  { name: 'links[android][url]', value: 'android://www.example.com' },
  { name: 'links[android][bundle_id]', value: 'bar' },
  { name: 'links[gearvr][url]', value: 'gearvr://www.example.com' },
  { name: 'links[gearvr][bundle_id]', value: 'com.foo.bar' },
  { name: 'links[daydream][url]', value: 'daydream://www.example.com' },
  { name: 'links[daydream][bundle_id]', value: 'com.daydream.package.app' },
  { name: 'links[oculus][url]', value: 'rift://www.example.com' },
  { name: 'links[oculus][bundle_id]', value: 'rift.package.foo' },
  { name: 'links[vive][url]', value: 'vive://www.example.com' },
  { name: 'links[vive][bundle_id]', value: 'com.vive.htc.package' }
]

const parseDeviceLinks = (data) => {
  const output = []
  const platformLinkMap = {}
  for (const { name, value } of data) {
    const [platform, linkType] = name.match(/(?<=\[).+?(?=\])/gm)
    if (platformLinkMap[platform]) {
      platformLinkMap[platform][linkType] = value
    } else {
      platformLinkMap[platform] = {
        [linkType]: value
      }
      output.push({ [platform]: platformLinkMap[platform] })
    }
  }
  return output
}

console.log('Parsed Data\n', parseDeviceLinks(input))
