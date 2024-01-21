'use client';

import React from 'react';
import CompanyForm, { CompanyFormProps } from './company-form';
import Modal, { ModalProps } from './modal';

export interface CompanyFormModalProps extends ModalProps {
  onSubmit: CompanyFormProps['onSubmit'];
}

export default function CompanyFormModal({
  onSubmit,
  ...rest
}: CompanyFormModalProps) {
  return (
    <Modal {...rest}>
      <CompanyForm onSubmit={onSubmit} />
    </Modal>
  );
}

// export default function CompanyFormModal({ onClose, ...rest }: ModalProps) {
//   return (
//     <Modal {...rest} onClose={onClose}>
//       <CompanyForm onSubmit={() => onClose()} />
//     </Modal>
//   );
// }
