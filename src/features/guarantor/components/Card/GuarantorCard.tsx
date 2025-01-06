// Muhammad Fauzi Nur Aziz
import { DetailCardItem } from '~/components/elements/DetailCardItem';
import { toFormatDate } from '~/utils/toFormatDate';
import { type GuarantorWithRelations } from '../../types';

type GuarantorCardProps = {
    guarantor: GuarantorWithRelations;
};

export const GuarantorCard = (props: GuarantorCardProps) => {
    return (
        <div className="border rounded-lg p-4">
            <div className="flex justify-end items-center text-md capitalize w-full pb-5">
                <span>Hubungan </span>
                <span className="font-medium">
                    : {props.guarantor.relationship}
                </span>
            </div>
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-4">
                <div className="space-y-2">
                    <DetailCardItem
                        label="nama"
                        content={props.guarantor.name}
                    />
                    <DetailCardItem
                        label="NIK"
                        content={props.guarantor.national_id}
                    />
                    <DetailCardItem
                        label="No. HP"
                        content={props.guarantor.phone}
                    />
                    <DetailCardItem
                        label="Pekerjaan"
                        content={props.guarantor.occupation}
                    />
                </div>
                <div className="space-y-2">
                    <DetailCardItem
                        label="Alamat KTP"
                        content={props.guarantor.id_card_address}
                    />
                    <DetailCardItem
                        label="Alamat Tinggal"
                        content={props.guarantor.residential_address}
                    />
                </div>
            </div>
            <div className="pt-10 xl:pt-5">
                <div
                    className={`w-full flex flex-col gap-y-5 md:flex-row justify-end gap-x-10 text-gray-500 text-sm ${props.guarantor.customer && 'justify-between pt-10'}`}
                >
                    {props.guarantor.customer && (
                        <span className="capitalize w-full">
                            Penjamin dari nasabah :{' '}
                            {props.guarantor.customer.name}
                        </span>
                    )}
                    <div className="w-full flex flex-col md:flex-row gap-y-5 gap-x-10 justify-end">
                        <span>
                            Dibuat:{' '}
                            {toFormatDate(
                                props.guarantor?.created_at ?? new Date(),
                            )}
                        </span>
                        <span>
                            Diperbarui:{' '}
                            {toFormatDate(
                                props.guarantor?.updated_at ?? new Date(),
                            )}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};
