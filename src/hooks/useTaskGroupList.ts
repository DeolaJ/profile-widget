import { useQuery } from "@tanstack/react-query";

import { TaskGroupType } from "../types";

const fetchTaskGroupList = async (): Promise<TaskGroupType[]> => {
    const response = await fetch(
        "https://gist.githubusercontent.com/huvber/ba0d534f68e34f1be86d7fe7eff92c96/raw/98a91477905ea518222a6d88dd8b475328a632d3/mock-progress",
    );
    if (!response.ok) {
        throw new Error(response.statusText);
    }
    const groupList: TaskGroupType[] = await response.json();
    return groupList;
};

export default function useTaskGroupList() {
    return useQuery({
        queryKey: ["task_groups"],
        queryFn: fetchTaskGroupList,
        staleTime: Infinity,
    });
}
