import {MannschaftDTO} from '../types/datatransfer/mannschaft-dto.class';
import {VersionedDataTransferObject} from '../../shared/data-provider';

// export function toDO(mannschaftDTO: MannschaftDTO): MannschaftDO {
//
// }
//
// export function toDTO(mannschaftDO: MannschaftDO): MannschaftDTO {
//
// }

export function fromPayload(payload: VersionedDataTransferObject): MannschaftDTO {
  return MannschaftDTO.copyFrom(payload);
}

export function fromPayloadArray(payload: VersionedDataTransferObject[]): MannschaftDTO[] {
  const list: MannschaftDTO[] = [];
  payload.forEach(single => list.push(fromPayload(single)));
  return list;
}
