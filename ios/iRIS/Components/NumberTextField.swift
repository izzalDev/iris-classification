//
//  ExtractedView.swift
//  iRIS
//
//  Created by Rizal Fadlullah on 26/09/24.
//
import SwiftUI

struct NumberTextField: View {
    var placeholder: String
    @Binding var value: Double
    @State private var input: String = ""
    
    init(_ placeholder: String, value: Binding<Double>) {
        self.placeholder = placeholder
        self._value = value
    }
    
    var body: some View {
        TextField(placeholder, text: $input)
            .keyboardType(.decimalPad)
            .onChange(of: input) {
                // Mengizinkan hanya angka desimal
                var filtered = input.filter { "0123456789.".contains($0) }
                
                // Batasi jumlah titik desimal menjadi satu
                let decimalCount = filtered.filter { $0 == "." }.count
                if decimalCount > 1 {
                    filtered = String(filtered.dropLast())
                }
                
                // Tambahkan "0" di depan jika input dimulai dengan "."
                if filtered.first == "." {
                    filtered = "0" + filtered
                }
                
                // Mengupdate nilai binding
                input = filtered
                if let doubleValue = Double(input) {
                    value = doubleValue
                } else {
                    value = 0.0 // Mengatur ke 0 jika input tidak valid
                }
            }
    }
}
