import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import * as rolesApi from '../api/rolesApi';

export function useRoles(params) {
  return useQuery({
    queryKey: ['roles', params],
    queryFn: () => rolesApi.fetchRoles(params)
  });
}

export function useRole(id) {
  return useQuery({
    queryKey: ['role', id],
    queryFn: () => rolesApi.fetchRole(id),
    enabled: !!id
  });
}

export function useCreateRole() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: rolesApi.createRole,
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ['roles'] })
  });
}

export function useUpdateRole() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: rolesApi.updateRole,
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ['roles'] })
  });
}

export function useDeleteRole() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: rolesApi.deleteRole,
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ['roles'] })
  });
}
