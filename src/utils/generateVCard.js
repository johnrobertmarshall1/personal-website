export async function generateVCard({ name, email, phone, linkedin, websiteUrl, photoUrl }) {
  const [firstName, ...rest] = name.split(' ')
  const lastName = rest.join(' ')

  let photoLine = ''
  if (photoUrl) {
    const response = await fetch(photoUrl)
    const blob = await response.blob()
    const base64 = await new Promise((resolve) => {
      const reader = new FileReader()
      reader.onloadend = () => resolve(reader.result.split(',')[1])
      reader.readAsDataURL(blob)
    })
    photoLine = `PHOTO;ENCODING=b;TYPE=JPEG:${base64}`
  }

  const vcard = [
    'BEGIN:VCARD',
    'VERSION:3.0',
    `N:${lastName};${firstName};;;`,
    `FN:${name}`,
    email ? `EMAIL;TYPE=INTERNET:${email}` : '',
    phone ? `TEL;TYPE=CELL:${phone}` : '',
    linkedin ? `URL:${linkedin}` : '',
    websiteUrl ? `URL:${websiteUrl}` : '',
    photoLine,
    'END:VCARD',
  ]
    .filter(Boolean)
    .join('\r\n')

  const vcardBlob = new Blob([vcard], { type: 'text/vcard;charset=utf-8' })
  const url = URL.createObjectURL(vcardBlob)
  const link = document.createElement('a')
  link.href = url
  link.download = `${name.replace(/\s+/g, '_')}.vcf`
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
  URL.revokeObjectURL(url)
}
