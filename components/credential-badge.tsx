import Image from 'next/image';
import Link from 'next/link';

interface CredentialBadgeProps {
  imageUrl: string;
  credlyUrl: string;
  alt: string;
  title?: string;
  description?: string;
}

export default function CredentialBadge({
  imageUrl,
  credlyUrl,
  alt,
  title,
  description
}: CredentialBadgeProps) {
  return (
    <div className="flex flex-col items-center">
      {title && (
        <h3 className="text-2xl font-semibold mb-3">{title}</h3>
      )}
      <Link
        href={credlyUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="transition-transform hover:scale-105 focus:scale-105"
      >
        <div className="relative w-48 h-48 mb-3">
          <Image
            src={imageUrl}
            alt={alt}
            fill
            sizes="192px"
            style={{ objectFit: 'contain' }}
            className="rounded-md"
          />
        </div>
      </Link>
      {description && (
        <p className="text-center text-sm max-w-xs">{description}</p>
      )}
      <p className="text-xs mt-2">
        <Link
          href={credlyUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:text-primary"
        >
          Verify this credential on Credly
        </Link>
      </p>
    </div>
  );
}
