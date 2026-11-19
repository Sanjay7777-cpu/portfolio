export function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/9779824804400"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-40 grid h-14 w-14 place-items-center rounded-full text-white animate-whatsapp-pulse hover:scale-110 transition-transform"
      style={{ background: "linear-gradient(135deg, #25D366, #128C7E)" }}
    >
      <svg viewBox="0 0 32 32" className="h-7 w-7" fill="currentColor" aria-hidden="true">
        <path d="M19.11 17.21c-.27-.14-1.6-.79-1.85-.88-.25-.09-.43-.14-.61.14-.18.27-.7.88-.86 1.06-.16.18-.32.2-.59.07-.27-.14-1.14-.42-2.17-1.34-.8-.71-1.34-1.59-1.5-1.86-.16-.27-.02-.42.12-.55.12-.12.27-.32.41-.48.14-.16.18-.27.27-.45.09-.18.05-.34-.02-.48-.07-.14-.61-1.47-.84-2.01-.22-.53-.45-.46-.61-.47l-.52-.01c-.18 0-.48.07-.73.34-.25.27-.95.93-.95 2.26 0 1.34.98 2.63 1.11 2.81.14.18 1.92 2.93 4.65 4.11.65.28 1.15.45 1.55.58.65.21 1.24.18 1.71.11.52-.08 1.6-.65 1.83-1.28.23-.63.23-1.16.16-1.28-.07-.12-.25-.18-.52-.32zM16.02 4C9.39 4 4 9.4 4 16.02c0 2.12.55 4.18 1.61 6L4 28l6.13-1.6c1.76.96 3.74 1.47 5.89 1.47 6.62 0 12.02-5.4 12.02-12.02C28.04 9.4 22.65 4 16.02 4z"/>
      </svg>
    </a>
  );
}
