export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      Customers: {
        Row: {
          created_at: string
          CustomerName: string | null
          email: string | null
          id: number
          isDelete: string | null
          phone: string | null
        }
        Insert: {
          created_at?: string
          CustomerName?: string | null
          email?: string | null
          id?: number
          isDelete?: string | null
          phone?: string | null
        }
        Update: {
          created_at?: string
          CustomerName?: string | null
          email?: string | null
          id?: number
          isDelete?: string | null
          phone?: string | null
        }
        Relationships: []
      }
      notes: {
        Row: {
          id: number
          title: string | null
        }
        Insert: {
          id?: number
          title?: string | null
        }
        Update: {
          id?: number
          title?: string | null
        }
        Relationships: []
      }
      Orders: {
        Row: {
          created_at: string
          customerId: number
          discount: number
          discountType: string
          dueDate: string
          finalAmount: number
          id: number
          isDelete: string | null
          personName: string
        }
        Insert: {
          created_at?: string
          customerId: number
          discount: number
          discountType: string
          dueDate: string
          finalAmount: number
          id?: number
          isDelete?: string | null
          personName: string
        }
        Update: {
          created_at?: string
          customerId?: number
          discount?: number
          discountType?: string
          dueDate?: string
          finalAmount?: number
          id?: number
          isDelete?: string | null
          personName?: string
        }
        Relationships: [
          {
            foreignKeyName: "Orders_customerId_fkey"
            columns: ["customerId"]
            isOneToOne: false
            referencedRelation: "Customers"
            referencedColumns: ["id"]
          },
        ]
      }
      Shutter: {
        Row: {
          created_at: string
          id: number
          isDelete: string | null
          shutterName: string | null
        }
        Insert: {
          created_at?: string
          id?: number
          isDelete?: string | null
          shutterName?: string | null
        }
        Update: {
          created_at?: string
          id?: number
          isDelete?: string | null
          shutterName?: string | null
        }
        Relationships: []
      }
      ShutterList: {
        Row: {
          area: number | null
          created_at: string
          height: number | null
          id: number
          isDelete: string | null
          orderId: number | null
          shutterId: number | null
          width: number | null
        }
        Insert: {
          area?: number | null
          created_at?: string
          height?: number | null
          id?: number
          isDelete?: string | null
          orderId?: number | null
          shutterId?: number | null
          width?: number | null
        }
        Update: {
          area?: number | null
          created_at?: string
          height?: number | null
          id?: number
          isDelete?: string | null
          orderId?: number | null
          shutterId?: number | null
          width?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "ShutterList_orderId_fkey"
            columns: ["orderId"]
            isOneToOne: false
            referencedRelation: "Orders"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "ShutterList_shutterId_fkey"
            columns: ["shutterId"]
            isOneToOne: false
            referencedRelation: "Shutter"
            referencedColumns: ["id"]
          },
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type PublicSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (PublicSchema["Tables"] & PublicSchema["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (PublicSchema["Tables"] &
        PublicSchema["Views"])
    ? (PublicSchema["Tables"] &
        PublicSchema["Views"])[PublicTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof PublicSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof PublicSchema["Enums"]
    ? PublicSchema["Enums"][PublicEnumNameOrOptions]
    : never