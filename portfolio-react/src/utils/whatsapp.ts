export function handleWhatsappSubmit(name: string, message: string) {
  const phone = '923459347900'
  const text = encodeURIComponent(`Hi Umer! My name is ${name}. ${message}`)
  window.open(`https://wa.me/${phone}?text=${text}`, '_blank')
}
