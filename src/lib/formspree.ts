const FORMSPREE_ID_PATTERN = /^[a-zA-Z0-9]+$/;

export type FormspreeConfig = {
  formId: string;
  endpoint: string;
  configError: string | null;
};

export function getFormspreeConfig(raw: string | undefined): FormspreeConfig {
  const trimmed = raw?.trim() ?? '';

  if (!trimmed) {
    return { formId: '', endpoint: '', configError: null };
  }

  if (/^https?:\/\//i.test(trimmed) || trimmed.includes('formspree.io') || trimmed.includes('/')) {
    return {
      formId: '',
      endpoint: '',
      configError: 'NEXT_PUBLIC_FORMSPREE_FORM_ID must be the form ID only (e.g. xlgklynq), not the full URL.',
    };
  }

  if (!FORMSPREE_ID_PATTERN.test(trimmed)) {
    return {
      formId: '',
      endpoint: '',
      configError: 'NEXT_PUBLIC_FORMSPREE_FORM_ID must contain only letters and numbers.',
    };
  }

  return {
    formId: trimmed,
    endpoint: `https://formspree.io/f/${trimmed}`,
    configError: null,
  };
}
