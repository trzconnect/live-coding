import React from "react";
import { IEntryFile } from "../api/filesApi";
import styled from "styled-components";

const Entry = styled.div`
  color: #fff;
  padding-top: 10px;
`;

const VStack = styled.div<{ $depth: number }>`
  padding-left: ${({ $depth }) => $depth * 10}px;
`;

const Button = styled.button`
  background: none;
  color: #fff;
  border: none;

  &:hover {
    border: 1px solid #fff;
    cursor: pointer;
  }
`;

interface IEntryFileProps {
  entry: IEntryFile;
  depth: number;
}
export function EntryFile({ entry, depth }: IEntryFileProps) {
  const [isExpanded, setIsExpanded] = React.useState(false);

  return (
    <Entry>
      {entry.children ? (
        <Button onClick={() => setIsExpanded(!isExpanded)}>
          {`${isExpanded ? "-" : "+"} ${entry.name}`}
        </Button>
      ) : (
        <div>{entry.name}</div>
      )}

      {isExpanded && (
        <VStack $depth={depth}>
          {entry.children?.map((entry) => (
            <EntryFile entry={entry} depth={depth + 1} />
          ))}
        </VStack>
      )}
    </Entry>
  );
}
