export function generateVCard({ name, email, phone, linkedin, websiteUrl }) {
  const [firstName, ...rest] = name.split(' ')
  const lastName = rest.join(' ')

  const vcard = [
    'BEGIN:VCARD',
    'VERSION:3.0',
    `N:${lastName};${firstName};;;`,
    `FN:${name}`,
    email ? `EMAIL;TYPE=INTERNET:${email}` : '',
    phone ? `TEL;TYPE=CELL:${phone}` : '',
    linkedin ? `URL:${linkedin}` : '',
    websiteUrl ? `URL:${websiteUrl}` : '',
    'END:VCARD',
  ]
    .filter(Boolean)
    .join('\r\n')

  const blob = new Blob([vcard], { type: 'text/vcard;charset=utf-8' })
  const url = URL.createObjectURL(blob)
  const link = document.createElement('a')
  link.href = url
  link.download = `${name.replace(/\s+/g, '_')}.vcf`
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
  URL.revokeObjectURL(url)
}
